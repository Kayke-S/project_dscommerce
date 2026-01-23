import { requestBackend } from "../utils/requests";
import * as authService from "../services/auth-service";

export function findMe() {
  const headers = {
    Authorization: "Bearer " + authService.getAccessToken(),
  };

  console.log("erro do caraio", headers);
  return requestBackend({ url: `/users/me`, headers: headers});
}
