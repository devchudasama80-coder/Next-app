import sequelize from "@/lib/db";

export default async function TestPage() {
  let connected = false;
  let errorMessage = "";

  try {
    await sequelize.authenticate();
    await sequelize.sync();
    connected = true;
  } catch (error) {
    errorMessage = error.message;
  }

  return (
    <div>
      {connected ? (
        <h1>Database Connected Successfully!</h1>
      ) : (
        <>
          <h1>Database Connection Failed</h1>
          <p>{errorMessage}</p>
        </>
      )}
    </div>
  );
}