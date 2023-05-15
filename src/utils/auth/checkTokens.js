import jwtDecode from "jwt-decode";

export default function checkTokens() {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");

    if (!refreshToken && !accessToken) {
      return false;
    }

    // first check, if you have a valid access_token
    if (accessToken) {
      // accessToken may be invalid, or expired, or no refreshToken or refreshToken present or refreshToken may be invalid
      try {
        // decode the token
        // invalid or malformed token will throw error
        const atoken = jwtDecode(accessToken);

        let exp = null;

        if (atoken && atoken?.exp) {
          exp = atoken.exp;
        }

        // if no exp date or expired exp date
        if (!exp || exp < new Date().getTime() / 1000) {
          // invalid accessToken
          // now check for refreshToken
          if (refreshToken) {
            const rtoken = jwtDecode(refreshToken);
            let exp = null;

            if (rtoken && rtoken?.exp) {
              exp = rtoken.exp;
            }

            // if no exp date or expired exp date
            if (!exp || exp < new Date().getTime() / 1000) {
              return false;
            }
          } else {
            return false;
          }
        }
      } catch {
        // invalid accessToken
        // now check for refreshToken
        if (refreshToken) {
          const rtoken = jwtDecode(refreshToken);
          let exp = null;

          if (rtoken && rtoken?.exp) {
            exp = rtoken.exp;
          }

          // if no exp date or expired exp date
          if (!exp || exp < new Date().getTime() / 1000) {
            return false;
          }
        } else {
          return false;
        }
      }
    } else {
      // we have refreshToken
      // check if refreshToken exists or not
      const rtoken = jwtDecode(refreshToken);
      let exp = null;

      if (rtoken && rtoken?.exp) {
        exp = rtoken.exp;
      }

      // if no exp date or expired exp date
      if (!exp || exp < new Date().getTime() / 1000) {
        return false;
      }
    }

    // valid token
    return true;
  } catch (e) {
    return false;
  }
}
