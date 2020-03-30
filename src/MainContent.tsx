import React from "react";
import SearchIcon from "./icons/SearchIcon";
import GridIcon from "./icons/GridIcon";
import ListIcon from "./icons/ListIcon";
import FileIcon from "./icons/FileIcon";
import VerticalDotsIcons from "./icons/VerticalDots";

export default function MainContent() {
  return (
    <div className="bg-gray-100">
      <div className="p-8">
        <div className="relative">
          <input
            className="px-8 py-2 w-full rounded bg-white placeholder-gray-500 text-gray-700 border-gray-300 border focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="w-4 h-4 text-gray-500" />
          </span>
        </div>
        <div className="w-full flex items-center justify-around flex-wrap">
          <h2 className="flex-1 text-2xl font-semibold text-gray-800 my-6">
            Recently Used
          </h2>
          <div className="mx-auto">
            <GridIcon className="inline w-6 h-6 text-gray-700" />
            <ListIcon className="inline ml-1 w-6 h-6 text-gray-500" />
          </div>
        </div>
        <ul className="grid grid-cols-3 xl:grid-cols-4 gap-3">
          {recentlyUsedProjects.map(project => {
            return (
              <div className="h-32 xl:h-40 p-4 relative flex flex-col justify-around rounded-lg bg-white shadow-lg">
                <div className="flex items-start">
                  <FileIcon className="w-8 h-8 text-orange-500" />
                  <div className="ml-12 flex items-center">
                    {project.images.map(imageUrl => (
                      <span className="-ml-2 rounded-full border-2 border-white">
                        <img
                          className="h-6 w-6 rounded-full object-cover"
                          src={imageUrl}
                          alt="profile photos"
                        />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-sm font-semibold text-gray-700">
                    {project.name}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {project.createdAt}
                  </span>
                </div>
                <VerticalDotsIcons className="absolute top-0 right-0 mt-2 mr-1 w-4 h-4 text-gray-500" />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const recentlyUsedProjects = [
  {
    name: "App Project",
    createdAt: "Created: 20.02.2020",
    images: [
      "https://images.unsplash.com/photo-1584202532967-6390de14ecac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80",
      "https://images.unsplash.com/photo-1584202532967-6390de14ecac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80"
    ]
  },
  {
    name: "Project Fitbit",
    createdAt: "Created: 28.02.2020",
    images: [
      "https://images.unsplash.com/photo-1584202532967-6390de14ecac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80",
      "https://images.unsplash.com/photo-1584202532967-6390de14ecac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80"
    ]
  },
  {
    name: "Client Document",
    createdAt: "Created: 20.12.2019",
    images: [
      "https://images.unsplash.com/photo-1584202532967-6390de14ecac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80",
      "https://images.unsplash.com/photo-1584202532967-6390de14ecac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80"
    ]
  }
];
