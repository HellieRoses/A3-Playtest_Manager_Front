import {reactive} from "vue";

export const apiStore = reactive({
    apiUrl: "http://localhost/playtest_manager/public/api/",
    utilisateurConnecte: null,
    estConnecte: false,

    getAll(ressource: string): Promise<never> {
      return fetch(this.apiUrl + ressource)
        .then(reponsehttp => reponsehttp.json())
    },
    getById(ressource: string, id: number): Promise<never> {
      return fetch(this.apiUrl + ressource + '/' + id)
        .then(reponsehttp => reponsehttp.json())
    },
    login(login: string, password: string): Promise<{ success: boolean, error?: string }> {
      return fetch(this.apiUrl + "auth", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({login: login, password: password}),
      })
        .then(reponsehttp => {
          if (!reponsehttp.ok) {
            return reponsehttp.json()
              .then(reponseJSON => {
                return {success: false, error: reponseJSON.message};
              })
          } else {
            this.estConnecte = true;
            return reponsehttp.json()
              .then(reponseJSON => {
                this.utilisateurConnecte = reponseJSON;
                return {success: true};
              })
          }
        })
    },
    logout: function (): Promise<{ success: boolean, error?: string }> {
      return fetch(this.apiUrl + "token/invalidate", {
        method: "POST",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(reponsehttp => {
          if (!reponsehttp.ok) {
            return reponsehttp.json()
              .then(reponseJSON => {
                return {success: false, error: reponseJSON.message};
              })
          } else {
            this.estConnecte = false;
            this.utilisateurConnecte = null;
            return reponsehttp.json()
              .then(() => {
                return {success: true};
              })
          }
        })
    },
    refresh() {
      return fetch(this.apiUrl + "token/refresh", {
        method: "POST",
        credentials: 'include'
      })
        .then(reponsehttp => {
          if (!reponsehttp.ok) {
            this.estConnecte = false;
            return reponsehttp.json()
              .then(reponseJSON => {
                return {success: false, error: reponseJSON.message};
              })
          } else {
            return reponsehttp.json()
              .then(reponseJSON => {
                this.estConnecte = true;
                this.utilisateurConnecte = reponseJSON;
                return {success: true};
              })
          }
        })
    },
    createRessource(ressource: string, data: never): Promise<never> {
      return fetch(this.apiUrl + ressource, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
        .then(reponsehttp => reponsehttp.json())
    },
    deleteRessource(ressource: string, id: number): Promise<never> {
      return fetch(this.apiUrl + ressource + '/' + id, {
        method: "DELETE"
      })
        .then(reponsehttp => reponsehttp.json())
    },
    updateRessource(ressource: string, id: number,data: never): Promise<never> {
      return fetch(this.apiUrl + ressource + '/' + id, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
        .then(reponsehttp => reponsehttp.json())
    },
    getParticipationPlayer(id: number): Promise<never> {
      return fetch(this.apiUrl + 'playtests/' + id + '/players')
        .then(reponsehttp => reponsehttp.json())
    },
    getParticipationPlaytest(id: number): Promise<never> {
      return fetch(this.apiUrl + 'players/' + id + '/playtests')
        .then(reponsehttp => reponsehttp.json())
    },
    createParticipation(ressource: string, data: never): Promise<never> {
      return fetch(this.apiUrl + '/playtests/participate', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
        .then(reponsehttp => reponsehttp.json())
    },
    getByCompany(ressource: string, id: number): Promise<never> {
      return fetch(this.apiUrl + 'companies/' + id + '/' + ressource)
        .then(reponsehttp => reponsehttp.json())
    },
    getByVideoGame(id: number): Promise<never> {
      return fetch(this.apiUrl + 'video_games/' + id + '/playtests')
        .then(reponsehttp => reponsehttp.json())
    },
    deleteParticipation(id: number): Promise<never> {
      return fetch(this.apiUrl + 'playtests/participate/' + id, {
        method: "DELETE"
      })
        .then(reponsehttp => reponsehttp.json())
    },
  }
)
