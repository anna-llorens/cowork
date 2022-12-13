console.log("hello");

interface CompanyInfo extends Casa {
  location?: string;
  name?: string;
  id?: string;
  salary?: string;
  kununoInfo?: string;
}

type User = {
  id: any;
  name: any;
  casa: Casa;
};

type Casa = {
  location?: string;
  name?: string;
  id?: string;
  salary?: string;

  hh?: string;
  pp?: string;
};

const user: User = {
  id: 666,
  name: "bytefer",
  casa: { hh: "", pp: "hey pp", location: "aa" },
};
console.log("holaa");

const test1 = (a) => {
  let { casa, ...rest }: User = user;
  console.log(casa, "location");
};

test1();

const keys = Object.keys(user);
console.log(keys);
