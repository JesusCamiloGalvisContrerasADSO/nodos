export const usuarios = async () => {
  const lista = await fetch("http://localhost:3000/users");
  const usuarios = await lista.json()
  console.log(usuarios)
  return usuarios
}