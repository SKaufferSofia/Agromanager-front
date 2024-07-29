"use client";
import { saveUserData } from "@/redux/reducer";
import { useSelector } from "react-redux";

const ProfileComponent = () => {
  const userData = useSelector((state: any) => state.userData);
  console.log(userData);

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="card card-profile">
        <img
          src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/img-1-1000x600.jpg"
          alt="Image placeholder"
          className="card-img-top w-full"
        />
        <div className="flex justify-center mt-4">
          <div className="lg:w-1/3">
            <div className="flex justify-center items-center">
              <a href="#">
                <img
                  src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                  className="rounded-full w-24 h-24"
                  alt="Profile"
                />
              </a>
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
              <div className="text-center">
                <span className="heading">
                  Establecimiento{" "}
                  <span className="description">{userData.placeName}</span>
                </span>
              </div>
              <div className="text-center">
                <span className="heading">
                  89 <span className="description">Comments</span>
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
    </div>
  );
};

export default ProfileComponent;
