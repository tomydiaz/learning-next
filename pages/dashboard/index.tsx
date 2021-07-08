import Link from "next/link";

const Dashboard = (props) => {
  return (
    <>
      <div>Dashboard</div>
      <Link href={`./sites`}>
        <a>
          <div>Go to All Sites</div>
        </a>
      </Link>
    </>
  );
};

export const getStaticProps = async () => {
  const sites = [];
  return {
    props: { sites },
  };
};

export default Dashboard;
