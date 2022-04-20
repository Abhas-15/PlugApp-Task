import React, { useState, useEffect } from "react";
import { ref, child, get } from "firebase/database";
import { db } from "../Firebase/firebase.init";
import { List, Row, Col, Card } from "antd";
import { Pagination } from "antd";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const dbRef = ref(db);
  const { Meta } = Card;

  useEffect(() => {
    async function fetchData() {
      const res = await get(child(dbRef, `users/`))
        .then((snapshot) => {
          setUser(snapshot.val());
        })
        .catch((error) => {
          console.error(error);
        });
      setLoading(false);
      console.log(loading);
    }
    if (!user) {
      fetchData();
    }
  }, [user]);

  var listData = [];
  if (user) {
    listData = Object.values(user);
  }
  console.log("Users", user);
  console.log(loading);

  return <div></div>;
}
