export default async function notifyForeignKeyReferences(
  fn: () => Promise<any>,
) {
  try {
    // Await the asynchronous function call
    await fn();
  } catch (err: any) {
    console.error(err);
    if (err.response?.data?.code === "23503") {
      alert(
        "No se puede borrar este objeto, hay otros datos que dependen de él. Debes borrar esos datos primero.",
      );
    }
  }
}
