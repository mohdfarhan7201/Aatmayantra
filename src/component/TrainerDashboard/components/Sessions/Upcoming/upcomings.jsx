import React, { useState } from "react";
import Header from "./viewtoggle";
import Tabs from "./Tabs";
import GridView from "./gridview";
import TableView from "./TableView";


export default function App() {
const [view, setView] = useState("grid");
const [tab, setTab] = useState("upcoming");


return (
<div className="border-gray-100 rounded-lg">
<Header view={view} setView={setView} />
<Tabs tab={tab} setTab={setTab} />


{view === "grid" ? <GridView /> : <TableView />}
</div>
);
}