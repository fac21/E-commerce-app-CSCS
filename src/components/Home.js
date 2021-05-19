
import db from "../../database/connection";

export default function Home({ data }) {
    console.log(data);
    return (
      <>
        <h1>{data.name}</h1>
      </>
    );
  }
  
  export async function getServerSideProps() {
    const GET_USER = "SELECT * FROM users;";
    const data_long = await db.query(GET_USER);
    const data = data_long.rows[0];
    return {
      props: {
        data,
      },
    };
  }
  