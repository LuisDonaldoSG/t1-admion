export async function GET() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return Response.json({ data });
}