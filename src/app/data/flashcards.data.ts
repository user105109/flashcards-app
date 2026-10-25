export const flashcards = [
  {
    id: 0,
    question: "Qu'est-ce que la compilation AOT (Ahead-Of-Time) dans Spring Boot 3 et pourquoi est-elle cruciale ?",
    answer: "La compilation AOT traduit l'application Spring en code natif (via GraalVM) avant l'exécution, éliminant le besoin d'une JVM traditionnelle. Elle supprime l'analyse dynamique des annotations au démarrage. Le résultat est un démarrage en quelques millisecondes et une consommation mémoire divisée par 5, ce qui est parfait pour le Serverless et Docker."
  },
  {
    id: 1,
    question: "Comment Spring Boot 3 intègre-t-il les Virtual Threads (Projet Loom) ?",
    answer: "Il suffit d'activer la propriété spring.threads.virtual.enabled=true dans les configurations. Spring bascule alors automatiquement ses pools de threads (Tomcat, tâches asynchrones) sur les Virtual Threads de Java 21. Cela permet de traiter des millions de requêtes concurrentes sans saturer la mémoire du serveur."
  },
  {
    id: 2,
    question: "C'est quoi les HTTP Interfaces introduites dans Spring 6 ?",
    answer: "C'est une alternative déclarative au RestTemplate ou WebClient inspirée de Feign. Vous définissez une interface Java avec des annotations comme @HttpExchange, et Spring génère automatiquement l'implémentation du client HTTP au runtime." +
      "public interface UserClient {\n" +
      "    @GetExchange(\"/users/{id}\")\n" +
      "    User findById(@PathVariable Long id);\n" +
      "}"
  },
  {
    id: 3,
    question: "Quelle est la différence entre RestControllerEndpoint et @RestController ?",
    answer: "@RestController expose un endpoint API classique pour les utilisateurs, tandis que @RestControllerEndpoint est une annotation de Spring Boot Actuator. Elle sert à créer des points de contrôle d'infrastructure personnalisés (metrics, health) managés par Actuator."
  },
  {
    id: 4,
    question: "Comment fonctionne le nouveau RestClient de Spring 6.1+ ?",
    answer: "C'est le nouveau client HTTP synchrone qui remplace l'ancien RestTemplate. Il offre une API fluide (fluent API) moderne similaire à WebClient mais sans la complexité réactive (WebFlux)."
  },
  {
    id: 5,
    question: "Pourquoi l'injection par constructeur est-elle préférée à @Autowired sur les champs ?",
    answer: "L'injection par constructeur garantit l'immuabilité (champs final), facilite les tests unitaires sans framework de mock, et empêche l'application de démarrer en cas de dépendance circulaire."
  },
  {
    id: 6,
    question: " Quelle est la différence exacte entre @Component, @Service, et @Repository ?",
    answer: "Techniquement, ce sont tous des beans Spring (@Component). Cependant, @Repository active la traduction automatique des exceptions de base de données en exceptions Spring (DataAccessException), et @Service sert de marqueur sémantique pour la logique métier sans comportement technique supplémentaire."
  },
  {
    id: 7,
    question: "Qu'est-ce que le scope RefreshScope dans Spring Cloud ?",
    answer: "Il permet de recharger dynamiquement la configuration d'un Bean (via @Value ou @ConfigurationProperties) au runtime sans redémarrer l'application. Il suffit d'appeler l'endpoint Actuator /actuator/refresh."
  },
  {
    id: 8,
    question: "Comment intercepter le cycle de vie d'un Bean juste après sa création ?",
    answer: "Il faut utiliser l'annotation @PostConstruct sur une méthode du Bean. Elle s'exécute automatiquement dès que Spring a injecté toutes les dépendances du Bean, contrairement au constructeur où les dépendances ne sont pas encore prêtes."
  },
  {
    id: 9,
    question: "Que se passe-t-il si une méthode annotée @Transactional appelle une autre méthode @Transactional dans la même classe ?",
    answer: "L'intercepteur de transaction de Spring est contourné (Self-Invocation Issue). Spring utilise des proxys AOP ; si l'appel reste interne à la classe, il ne passe pas par le proxy et la configuration de la deuxième transaction est ignorée."
  },
  {
    id: 10,
    question: "Quelle est la différence entre Propagation.REQUIRED et REQUIRES_NEW ?",
    answer: "REQUIRED (par défaut) rejoint la transaction existante ou en crée une s'il n'y en a pas. REQUIRES_NEW suspend la transaction en cours et crée systématiquement une nouvelle transaction indépendante."
  },
  {
    id: 11,
    question: "Pourquoi faut-il éviter @EqualsAndHashCode ou l'implémentation par défaut de Lombok sur les entités JPA ?",
    answer: "Lombok génère des méthodes basées sur tous les champs, ce qui peut déclencher des chargements paresseux (Lazy Loading) accidentels de relations et causer des erreurs LazyInitializationException ou plomber les performances."
  },
  {
    id: 12,
    question: "Comment résoudre le problème du N+1 Select avec Spring Data JPA ?",
    answer: "Il faut utiliser un JOIN FETCH dans votre requête JPQL ou définir une @EntityGraph. Cela force JPA à charger l'entité principale et ses relations en une seule et unique requête SQL."
  },
  {
    id: 13,
    question: "Quelle est la différence entre CrudRepository et JpaRepository ?",
    answer: "JpaRepository hérite de ListCrudRepository et ajoute des fonctionnalités spécifiques à JPA : la gestion du flush du contexte de persistance, la suppression par lots (batch delete), et le support de la pagination/tri retournant des objets List plutôt que des Iterable."
  },
  {
    id: 14,
    question: "Comment configure-t-on Spring Security dans Spring Boot 3 (WebSecurityConfigurerAdapter ayant été supprimé) ?",
    answer: "La configuration se fait désormais entièrement de manière déclarative via un Bean SecurityFilterChain.\n\n" +
      "@Bean\n" +
      "public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n" +
      "    return http\n" +
      "        .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())\n" +
      "        .formLogin(Customizer.withDefaults())\n" +
      "        .build();\n" +
      "}"
  },
  {
    id: 15,
    question: "Quelle est la différence entre @ControllerAdvice et @ExceptionHandler ?",
    answer: "@ExceptionHandler intercepte les exceptions au sein d'un seul contrôleur. @ControllerAdvice est un composant global qui centralise la gestion des exceptions pour tous les contrôleurs de l'application."
  },
  {
    id: 16,
    question: "À quoi sert le nouveau support de ProblemDetails (RFC 7807) dans Spring 6 ?",
    answer: "Il standardise le format des réponses d'erreur HTTP. Au lieu de générer des structures JSON d'erreur personnalisées, Spring fournit une structure officielle (status, type, title, detail, instance) comprise par tous les clients modernes."
  },
  {
    id: 17,
    question: "Quelle est la différence entre l'authentification et l'autorisation dans Spring Security ?",
    answer: "L'authentification valide qui est l'utilisateur (login/password, JWT). L'autorisation détermine ce que cet utilisateur a le droit de faire (rôles, permissions via @PreAuthorize)."
  },
  {
    id: 18,
    question: "Qu'est-ce que ObservationRegistry introduit dans Spring 6 ?",
    answer: "C'est la nouvelle API unifiée pour l'observabilité. Elle remplace la séparation entre les métriques (Micrometer) et le traçage (Spring Cloud Sleuth). Elle permet d'enregistrer à la fois des métriques et des traces distribuées avec une seule configuration."
  },
  {
    id: 19,
    question: "test",
    answer: "test"
  }
]
