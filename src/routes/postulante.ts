
export const postulanteRoute=(router,container)=>{
    router.route('/')
    .get(container.cradle.postulanteController.getAll
    .bind(container.cradle.postulanteController))
    .post(container.cradle.postulanteController.add
    .bind(container.cradle.postulanteController))
        

    return router
}