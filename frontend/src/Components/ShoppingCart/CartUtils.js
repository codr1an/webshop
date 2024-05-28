export const fetchCartItemCount = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const response = await fetch("http://localhost:8080/api/cart", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch cart");

    const data = await response.json();
    const itemCount = data.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    return itemCount;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return 0;
  }
};
