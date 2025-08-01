/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hudi.sink.utils;

import org.apache.hudi.exception.HoodieException;
import org.apache.hudi.sink.StreamWriteOperatorCoordinator;
import org.apache.hudi.sink.event.Correspondent;

/**
 * A mock {@link Correspondent} that always return the latest instant.
 */
public class MockCorrespondent extends Correspondent {
  private final StreamWriteOperatorCoordinator coordinator;
  public MockCorrespondent(StreamWriteOperatorCoordinator coordinator) {
    this.coordinator = coordinator;
  }

  @Override
  public String requestInstantTime(long checkpointId) {
    try {
      InstantTimeResponse response = CoordinationResponseSerDe.unwrap(this.coordinator.handleCoordinationRequest(InstantTimeRequest.getInstance(checkpointId)).get());
      return response.getInstant();
    } catch (Exception e) {
      throw new HoodieException("Error requesting the instant time from the coordinator", e);
    }
  }
}
