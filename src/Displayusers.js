// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Displayusers = () => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         try {
//             const response = axios.get("https://dummyjson.com/users")
//             setData(response.data);
//         } catch (error) { setError(error) }
//     }, []);
//     return (
//         <>
//             display users
//         </>)
// }
// export default Displayusers;