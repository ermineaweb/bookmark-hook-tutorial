import React, { useEffect, useState } from "react";
import useBookmarks from "./useBookmarks";

function Users({ users }) {
  const [bookmarksOnly, setBookmarksOnly] = useState(false);
  const [usersState, setUsersState] = useState(users);
  const [bookmarks, toggleBookmark] = useBookmarks();

  const changeBookMarksOnly = (e) => {
    setBookmarksOnly(e.target.checked);
  };

  useEffect(() => {
    setUsersState(users.filter((s) => (bookmarksOnly ? bookmarks.includes(s.id) : s)));
  }, [users, bookmarksOnly, bookmarks]);

  return (
    <div className={"root"}>
      <label htmlFor="check">Bookmarked users only</label>
      <input id={"check"} type="checkbox" value={bookmarksOnly} onChange={changeBookMarksOnly} />
      <div className={"users"}>
        {usersState.map((user) => {
          const isBookmarked = bookmarks.includes(user.id);
          return (
            <div key={user.id} className={`user ${isBookmarked ? "bookmarked" : ""}`}>
              <div>{user.username}</div>
              <button onClick={toggleBookmark(user.id)}>
                {isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
