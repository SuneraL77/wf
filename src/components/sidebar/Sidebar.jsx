import React, { useState } from "react";
import { SidebarHeader } from "./header";
import { Notifications } from "./notifications";
import { Search, SearchResults } from "./search";
import { Conversations } from "./Conversations.jsx";

export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
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
        <SearchResults searchResults={searchResults}/>
        </>
      ) : (
        <>{/*Conversations */}
              <Conversations />
        </>
      )}

      {/*Conversations */}

    </div>
  );
}
