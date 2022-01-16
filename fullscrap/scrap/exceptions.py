class ProfileUnavailable(Exception):
    def __init__(self, message="Este perfil no está disponible o no se encuentra."):
        self.message = message
        super().__init__(self.message)
