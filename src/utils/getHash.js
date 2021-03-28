const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; // split elimina los '/' y tenderemos el siguinte elemento ['', '1', '']

export default getHash;