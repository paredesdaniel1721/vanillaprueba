const resolveRoutes = (route) =>{
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id'; //if ternario
    return validRoute;
  }
  return `/${route}`; // nos retoran /about
};

export default resolveRoutes;