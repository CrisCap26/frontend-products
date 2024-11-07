//Definir funciones que haran peticiones al backend

export async function getAllProducts() {
    const data = await fetch('http://localhost:4000/api/products');
    return await data.json();
}

export async function getProduct(id: string) {
    const data = await fetch(`http://localhost:4000/api/products/${id}`);
    return await data.json();
}

export async function createProduct(productData: any) {
    const res = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });

    const data = await res.json();
    console.log(data)
}

export async function deleteProduct(id: string) {
    const res = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: 'DELETE',
    });
    return await res.json();
}