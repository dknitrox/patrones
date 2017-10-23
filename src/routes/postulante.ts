
export const postulanteRoute=(router,container)=>{
    router.get('/',container.cradle.postulanteController.getAll)
    return router
}