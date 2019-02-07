// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import { listen, copy } from "deno";

(async () => {
  const addr = "0.0.0.0:8080";
  const listener = listen("tcp", addr);
  console.log("listening on", addr);
  while (true) {
    const conn = await listener.accept();
    copy(conn, conn);
  }
})();
