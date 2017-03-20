{:default {:env {}

 :dev        [:default {:env {:dev? "true"}}]
 :production [:default {:env {:iamfoxy-endpoint "https://tunnus.lassila-tikanoja.fi" :connection "production-db" :swagger-password "productionSelaaja"}}]}}
