export async function getGameTypes() {
  try {
    const response = await fetch("http://demo7919674.mockable.io/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
