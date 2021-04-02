import React from 'react';
import Pagination from "../common/Pagination/Pagination";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return (
        <div>

            <Pagination currentPage={currentPage} onPageChanged={onPageChanged}
                        pageSize={pageSize} totalItemsCount={totalUsersCount}/>
            <div>
                {
                    users.map(u => <User key={u.id}
                                         user={u}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}/>
                    )
                }
            </div>
        </div>)
}

export default Users;