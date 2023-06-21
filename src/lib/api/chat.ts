export async function getTest() {
    const response = await fetch("http://localhost:3060/api/test");
    const message: string = await response.json();

    return message;
}
