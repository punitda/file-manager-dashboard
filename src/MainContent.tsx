import React from "react";
import SearchIcon from "./icons/SearchIcon";
import GridIcon from "./icons/GridIcon";
import ListIcon from "./icons/ListIcon";
import FileIcon from "./icons/FileIcon";
import VerticalDotsIcons from "./icons/VerticalDots";
import ArrowDownIcon from "./icons/ArrowDownIcon";

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
        <RecentProjects />
        <RecentFiles />
      </div>
    </div>
  );
}

function RecentProjects() {
  return (
    <div>
      <div className="w-full flex items-center justify-around flex-wrap">
        <h2 className="flex-1 text-2xl text-gray-800 my-6">Recently Used</h2>
        <div className="mx-auto">
          <GridIcon className="inline w-6 h-6 text-gray-700" />
          <ListIcon className="inline ml-1 w-6 h-6 text-gray-500" />
        </div>
      </div>
      <ul className="grid grid-cols-3 xl:grid-cols-4 gap-3">
        {recentlyUsedProjects.map(project => {
          return (
            <div className="h-32 xl:h-40 p-4 relative flex flex-col justify-around rounded-lg bg-white shadow-lg">
              <div className="flex flex-wrap items-start">
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
  );
}

function RecentFiles() {
  return (
    <div className="mt-8">
      <div className="flex items-center">
        <h2 className="flex-1 text-2xl text-gray-800 my-6">Recent Files</h2>
        <span className="ml-auto text-gray-700 hover:text-gray-900 cursor-pointer">
          View All
        </span>
      </div>
      <div className="grid gap-2 grid-cols-1">
        <div className="grid grid-cols-recentfiles text-xs text-gray-500 mb-4">
          <span>
            Name
            <ArrowDownIcon className="inline ml-1 w-3 h-3" />
          </span>
          <span>Members</span>
          <span>Last Modified</span>
        </div>
        {recentFiles.map(file => (
          <div className="grid grid-cols-recentfiles bg-white rounded-md shadow-sm p-3">
            <h3 className="text-sm text-gray-700 font-semibold">
              <span
                className={`${file.color} inline-block rounded-md p-2 w-8 text-center h-6 text-white text-tiny mr-2`}
              >
                {file.symbol}
              </span>
              {file.name}
            </h3>
            <span className="text-gray-500 text-sm">
              {`${file.membersCount} members`}
            </span>
            <span className="text-gray-500 text-sm ml-1">
              {file.lastModifiedAt}
            </span>
            <VerticalDotsIcons className="mt-px w-4 h-4 text-gray-500" />
          </div>
        ))}
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
      "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80"
    ]
  },
  {
    name: "Project Fitbit",
    createdAt: "Created: 28.02.2020",
    images: [
      "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80",
      "https://images.unsplash.com/photo-1547404415-5eb20ddab016?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80"
    ]
  },
  {
    name: "Client Document",
    createdAt: "Created: 20.12.2019",
    images: [
      "https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80",
      "https://images.unsplash.com/photo-1584202532967-6390de14ecac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80"
    ]
  }
];

const recentFiles = [
  {
    name: "Travel Landing Page",
    membersCount: 5,
    lastModifiedAt: "Mar 8, 2020",
    color: "bg-orange-400",
    symbol: "Ps"
  },
  {
    name: "Ture Photos",
    membersCount: 12,
    lastModifiedAt: "Mar 10, 2020",
    color: "bg-green-600",
    symbol: "Ph"
  },
  {
    name: "Dashboard Structure",
    membersCount: 10,
    lastModifiedAt: "Mar 9, 2020",
    color: "bg-red-500",
    symbol: "PDF"
  },
  {
    name: "Character Illustration",
    membersCount: 3,
    lastModifiedAt: "Mar 12, 2020",
    color: "bg-orange-500",
    symbol: "ZIP"
  }
];
