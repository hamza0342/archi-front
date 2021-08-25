export const clientSignup = (user, token) => {
    return fetch("http://localhost:8080/clientSignup", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const gcSignup = (user, token) => {
    return fetch("http://localhost:8080/generalContractorSignup", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const getclients = () => {
    return fetch(`http://localhost:8080/clients`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((response) => {
        console.log(response);
        return response.json();
    });
};

export const deleteclient = (clientId, token) => {
    return fetch(`http://localhost:8080/deleteclient`, {
        method: "DELETE",
        body: JSON.stringify({
            id: clientId,
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        console.log(response);
        return response.json();
    });
};

export const getGC = () => {
    return fetch(`http://localhost:8080/generalcontractors`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((response) => {
        console.log(response);
        return response.json();
    });
};

export const deleteGC = (gcId, token) => {
    return fetch(`http://localhost:8080/deletegc`, {
        method: "DELETE",
        body: JSON.stringify({
            id: gcId,
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        console.log(response);
        return response.json();
    });
};
