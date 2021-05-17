type Props = { stars: number };
const App = ({ stars }: Props) => {
  return (
    <div>{stars}</div>
  )
};
 
const url = "http://localhost:6683/users";
export async function getServerSideProps() {
  const json = await fetch(url).then((r) => r.json());
  console.log(json[0].id);
  const stars = json[0].email;
  return {
    props: {
      stars,
    },
  };
}
 
export default App;
