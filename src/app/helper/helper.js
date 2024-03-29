export const checkLogIn = () => {
  const handleRefreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken')
    console.log(refreshToken)
    if(refreshToken != null){
    try {
        console.log("fetch")
      await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/member/refresh`, {
        method: "GET",
        headers: {
          "Authorization-refresh" : `Bearer ${refreshToken}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem('refreshToken',res.data.refreshToken);
          localStorage.setItem('accessToken',res.data.accessToken);
        });
        return true;
    } catch (error) {
        console.log("err-logout!")
        console.log(error)
        handleLogOut();
      return false;
    }
  }
  else{return false}
  }
  return handleRefreshToken();
};

export const isLogIn = () => {
    return localStorage.getItem("accessToken");
  };

export const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };
