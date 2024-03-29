import React, { useState } from "react";
import { SidebarHeader } from "./header";
import { Notifications } from "./notifications";
import { Search, SearchResults } from "./search";
import { Conversations } from "./Conversations.jsx";

export default function Sidebar({onlineUsers}) {
  const [searchResults, setSearchResults] = useState([]);
 
  return (
    <div className="w-[40%] h-full select-none">
      <SidebarHeader />
      {/*Notification */}
      <Notifications />
      {/*Search*/}
      <Search
        serchLength={searchResults.length}
        setSearchResults={setSearchResults}
      />
      {searchResults.length > 0 ? (
        <>{/*Search results */}
        <SearchResults searchResults={searchResults} setSearchResults ={setSearchResults}/>
        </>
      ) : (
        <>{/*Conversations */}
              <Conversations onlineUsers={onlineUsers}/>
        </>
      )}

      {/*Conversations */}

    </div>
  );
}
