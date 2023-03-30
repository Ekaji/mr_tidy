/* eslint-disable @next/next/no-img-element */
import organizations from '../pages/api/organizations.json'
export const Team = () => {



    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
            {
                organizations.organizations.map(( { name, address, image }) => (
                  
                <div key={''}>
                    {/* <img
                    className="object-cover w-24 h-24 rounded-full shadow"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="Person"
                    /> */}
                    <div className="flex flex-col justify-center mt-2">
                    <p className="text-lg font-bold">{ name }</p>
                    {/* <p className="mb-4 text-xs text-gray-800">Product Manager</p> */}
                    <p className="text-sm tracking-wide text-gray-800">{address}
                    </p>
                    </div>
                </div>
              ))  
            }
        </div>
      </div>
    );
  };
  