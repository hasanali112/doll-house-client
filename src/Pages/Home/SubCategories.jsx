import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const SubCategories = () => {
  const [loadAlltoy, setLoadAlltoy] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
 

  useEffect(() => {
    fetch("https://dolls-marketplace-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => setLoadAlltoy(data));
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const categories = [...new Set(loadAlltoy.map((item) => item.categories))];
  const category = categories.slice(0, 3);

  return (
    <div className="mt-40">
      <h1 className="text-4xl text-center font-bold mb-5 ">
        Shop by Popular Category
      </h1>
      <p className="text-xl text-center font-semibold mb-10 text-gray-500">
        The latest figures on the top online shopping categories here. <br />
        You can explore and view detail on the setail page
      </p>
      <div className="md:w-4/5 md:mx-auto">
        <Tabs>
          <TabList className="md:bg-gray-300 p-3">
            <Tab className="md:w-1/2 md:mx-auto ml-10">
              <div className="md:space-x-10 space-x-4">
                <div className="tabs md:space-x-10">
                  <a className="tab tab-lifted tab-active text-xl font-semibold md:space-x-20 space-x-4">
                    {category.map((cat, index) => (
                      <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={activeTab === index ? "active" : ""}
                      >
                        {cat}
                      </button>
                    ))}
                  </a>
                </div>
              </div>
            </Tab>
          </TabList>

          <TabPanel >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:space-x-20 mt-5">
            {loadAlltoy
              .filter((item) => item.categories === category[activeTab])
              .map((item, index) => (
                <div key={index}>
                  <div className="card mx-4 md:w-96 bg-base-100 shadow-xl p-3">
                    <figure>
                      <img
                        src={item.photoUrl}
                        alt="doll"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-bold">
                       {item.toyName}
                      </h2>
                      <p className="text-base text-gray-600 font-semibold">Price: ${item.price}</p>
                      <p className="text-base text-gray-600 font-semibold">Rating: {item.rating}</p>
                      <div className="card-actions justify-end">
                       <Link to={`/viewdetail/${item._id}`}> <button className="badge badge-outline">View Detail</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SubCategories;
