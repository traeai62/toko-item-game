function load() {
  if (typeof localStorage !== "undefined") {
    const token = localStorage.getItem("token");
    if (!token) return { redirect: "/login" };
  }
}
export {
  load
};
