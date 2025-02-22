/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hudi.examples.common;

import org.apache.hudi.common.config.HoodieTimeGeneratorConfig;
import org.apache.hudi.common.config.TypedProperties;
import org.apache.hudi.common.model.HoodieAvroPayload;
import org.apache.hudi.common.table.checkpoint.Checkpoint;
import org.apache.hudi.common.table.timeline.TimeGenerator;
import org.apache.hudi.common.table.timeline.TimeGenerators;
import org.apache.hudi.common.table.timeline.TimelineUtils;
import org.apache.hudi.common.util.Option;
import org.apache.hudi.hadoop.fs.HadoopFSUtils;
import org.apache.hudi.utilities.schema.SchemaProvider;
import org.apache.hudi.utilities.sources.InputBatch;
import org.apache.hudi.utilities.sources.JsonSource;

import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.SparkSession;

import java.util.List;

public class RandomJsonSource extends JsonSource {
  private final HoodieExampleDataGenerator<HoodieAvroPayload> dataGen;
  private final TimeGenerator timeGenerator;

  public RandomJsonSource(TypedProperties props, JavaSparkContext sparkContext, SparkSession sparkSession, SchemaProvider schemaProvider) {
    super(props, sparkContext, sparkSession, schemaProvider);
    dataGen = new HoodieExampleDataGenerator<>();
    timeGenerator = TimeGenerators
        .getTimeGenerator(HoodieTimeGeneratorConfig.defaultConfig(""),
            HadoopFSUtils.getStorageConf(sparkContext.hadoopConfiguration()));
  }

  @Override
  protected InputBatch<JavaRDD<String>> readFromCheckpoint(Option<Checkpoint> lastCkptStr, long sourceLimit) {
    String commitTime = TimelineUtils.generateInstantTime(true, timeGenerator);
    List<String> inserts = dataGen.convertToStringList(dataGen.generateInserts(commitTime, 20));

    return new InputBatch<>(Option.of(sparkContext.parallelize(inserts, 1)), commitTime);
  }
}
