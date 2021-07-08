import Link from "next/link";

const Home = (props) => {
  return (
    <>
      <div>Home DEV asd</div>
      <Link href={`./dashboard`}>
        <a>
          <div>Go to Dashboard</div>
        </a>
      </Link>
    </>
  );
};

// export const getStaticProps = async () => {
//   return {
//     props: {
//       //props
//     },
//   };
// };

export default Home;
