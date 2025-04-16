const getLocalUser = () => {
          try {
                    const user = localStorage.getItem('RegistrationUser');
                    return user ? JSON.parse(user) : null ;
          } catch (error) {
                    console.log("failed to parse Registation User from local Storage", error);
                    return null;
  }
};
export default getLocalUser;
