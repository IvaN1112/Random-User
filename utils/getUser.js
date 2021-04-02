export default async (URL) => {
  //getting person object from response data
  const response = await fetch(URL);
  const data = await response.json();
  const person = data.results[0];
  //destructuring the object
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  return {
    image: image,
    phone: phone,
    email,
    password,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
    age,
  };
};
