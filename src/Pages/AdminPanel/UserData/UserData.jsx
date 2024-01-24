import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { textDB } from "../../../firebase/firebase.config";

import ExportExcelButton from "../../../Components/ExportExcelButton/ExportExcelButton";
import LoadingAnimation from "../../../Components/LoadingAnimation/LoadingAnimation";

const UserData = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const valueRef = collection(textDB, "userData");
    const q = query(valueRef, orderBy("createAt", "desc"));
    try {
      const dataDB = await getDocs(q);
      const allData = dataDB.docs.map((val) => ({ ...val.data(), id: val.id }));
      setUserData(allData);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="overflow-x-auto mt-5">
      <div className="text-center space-y-3">
        <h1 className="text-2xl uppercase font-semibold">Admin Panel</h1>
        <p>Total Data - {userData.length} </p>
        <div>
          {userData.length > 0 && (
            <ExportExcelButton data={userData} fileName="exportedData" />
          )}
        </div>
      </div>
      <div className="pt-10 min-h-screen">
        <table className="table-auto w-full overflow-x-scroll">
          <thead>
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Brochure</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {userData.map((value, i) => {
              const { id, name, email, phone, projectName, date } = value;
              return (
                <tr key={id} className="user-table">
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{name}</td>
                  <td className="px-4 py-2">{email}</td>
                  <td className="px-4 py-2">{phone || "NA"}</td>
                  <td className="px-4 py-2">
                    {projectName || (
                      <span className="text-xs font-semibold rounded-full border px-2 border-black">
                        enquiry
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2">{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {userData.length === 0 && (
          <p className="text-center mt-10">No Data Available</p>
        )}
      </div>
    </div>
  );
};

export default UserData;
