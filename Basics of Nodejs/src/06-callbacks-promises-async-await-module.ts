type User = {
    id : number;
    name : string;
    role : "user" | "admin";
}

const users : User[] = [
    { id: 1, name: "Alice", role: "user" },
    { id: 2, name: "Bob", role: "admin" },
    { id: 3, name: "Charlie", role: "user" },
    { id: 4, name: "David", role: "admin" },
];

// ----------- CALLBACKS -----------

// Callback function to get user by ID
// callback(Error,result) -> Classic Node.js style callback
function getUserById(id: number, callback: (error: Error | null, user: User | null) => void): void {
    const user = users.find(u => u.id === id) || null;
    if(!user) {
        callback(new Error(`User with ID ${id} not found.`), null);
        return;
    }
    callback(null, user);
}

// Callback function to get users by role
function getUsersByRole(role: "user" | "admin", callback: (error: Error | null, users: User[]) => void): void {
    const filteredUsers = users.filter(u => u.role === role);
    callback(null, filteredUsers);
}

// Example usage of the callback functions
getUserById(2, (error, user) => {
    if (error) {
        console.error("Error occurred:", error.message);
        return;
    }
    if (user) {
        console.log(`User found: ${user.name}, Role: ${user.role}`); 
    } else {
        console.log("User not found.");
    }   
});

getUsersByRole("admin", (error, admins) => {
    if (error) {
        console.error("Error occurred:", error.message);
        return;
    }
    console.log("Admin users:");
    admins.forEach(admin => {
        console.log(`- ${admin.name}`);
    });
});

// ---------- PROMISES -----------

// Function to get user by ID using Promises
function getUserByIdPromise(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
        const user = users.find(u => u.id === id) || null;
        if (!user) {
            reject(new Error(`User with ID ${id} not found.`));
            return;
        }
        resolve(user);
    });
}

// Function to get users by role using Promises
function getUsersByRolePromise(role: "user" | "admin"): Promise<User[]> {
    return new Promise((resolve) => {
        const filteredUsers = users.filter(u => u.role === role);
        resolve(filteredUsers);
    });
}

// Example usage of the Promise functions
getUserByIdPromise(3)
    .then(user => {
        console.log(`User found: ${user.name}, Role: ${user.role}`);
    })
    .catch(error => {
        console.error("Error occurred:", error.message);
    });

getUsersByRolePromise("user")
    .then(users => {
        console.log("User role users:");
        users.forEach(user => {
            console.log(`- ${user.name}`);
        });
    })
    .catch(error => {
        console.error("Error occurred:", error.message);
    });

// ---------- ASYNC/AWAIT -----------

// Async function to get user by ID

async function getUserByIdAsync(id: number): Promise<User> {
    const user = users.find(u => u.id === id) || null;
    if (!user) {
        throw new Error(`User with ID ${id} not found.`);
    }
    return user;
}

// Async function to get users by role
async function getUsersByRoleAsync(role: "user" | "admin"): Promise<User[]> {
    const filteredUsers = users.filter(u => u.role === role);
    return filteredUsers;
}

// Example usage of the async/await functions
(async () => {
    try {
        const user = await getUserByIdAsync(1);
        console.log(`User found: ${user.name}, Role: ${user.role}`);
    } catch (error) {
        console.error("Error occurred:", (error as Error).message);
    }
})();

(async () => {
    try {
        const users = await getUsersByRoleAsync("admin");
        console.log("Admin users:");
        users.forEach(admin => {
            console.log(`- ${admin.name}`);
        });
    } catch (error) {
        console.error("Error occurred:", (error as Error).message);
    }
})();