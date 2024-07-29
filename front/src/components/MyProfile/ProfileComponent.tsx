"use client";
import { saveUserData } from "@/redux/reducer";
import { useSelector } from "react-redux";
import MainButton from "../MainButton/MainButton";

const ProfileComponent = () => {
  const userData = useSelector((state: any) => state.userData);
  console.log();

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="card card-profile bg-navbarColor p-6 rounded-xl text-white">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Sembrado_de_soja_en_argentina.jpg"
          alt="Image placeholder"
          className="card-img-top w-full h-[15rem] object-cover"
        />
        <div className="flex justify-center mt-4">
          <div className="lg:w-1/3">
            <div className="flex justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                className="rounded-full w-24 h-24"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        <div className="card-body pt-0">
          <div className="text-center mt-4">
            <h5 className="text-xl font-bold">
              {userData.name} {userData.surname}
            </h5>
            <h6 className="font-light">{userData.email}</h6>
          </div>
          <div className="flex justify-center p-7">
            <div className="card-profile-stats flex justify-center space-x-8">
              <div className="text-center">
                <span className="heading">
                  Telefono <span className="description">{userData.phone}</span>
                </span>
              </div>
              <div className="text-center p">
                <span className="heading">
                  Establecimiento{" "}
                  <span className="description">{userData.placeName}</span>
                </span>
              </div>
              <div className="text-center">
                <span className="heading">
                  Roles{" "}
                  <span className="description">
                    {userData.roles.map((role: any) => role.name)}
                  </span>
                </span>
              </div>
            </div>

            {/* <div className="card-profile-stats flex justify-center space-x-8">
              <div className="text-center">
                <span className="heading">22</span>
                <span className="description">Friends</span>
              </div>
              <div className="text-center">
                <span className="heading">10</span>
                <span className="description">Photos</span>
              </div>
              <div className="text-center">
                <span className="heading">89</span>
                <span className="description">Comments</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="p-5">
        <MainButton text="Ver lotes" path="/dashboard/plots" />
      </div>
    </div>
  );
};

export default ProfileComponent;
