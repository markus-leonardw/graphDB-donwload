{
  "users" : {
    "admin" : {
      "username" : "admin",
      "password" : "{bcrypt}$2a$10$b91UhwtaeliXAFCZmiDcOeBHPQOrKby2xx/X01J8aiN3Q4AOpFZJW",
      "grantedAuthorities" : [ "ROLE_ADMIN" ],
      "appSettings" : {
        "DEFAULT_INFERENCE" : true,
        "DEFAULT_VIS_GRAPH_SCHEMA" : true,
        "DEFAULT_SAMEAS" : true,
        "IGNORE_SHARED_QUERIES" : false,
        "EXECUTE_COUNT" : false
      },
      "dateCreated" : 1708170549211
    },
    "markus.leonard" : {
      "username" : "markus.leonard",
      "password" : "{bcrypt}$2a$10$oOkcac4SgtevOKC80GXXteYFpEflyIFOasg/N9dv4IAZAZTpkQ9l2",
      "grantedAuthorities" : [ "READ_REPO_*", "READ_REPO_obe-backup", "ROLE_USER" ],
      "appSettings" : {
        "DEFAULT_SAMEAS" : true,
        "DEFAULT_INFERENCE" : true,
        "EXECUTE_COUNT" : true,
        "IGNORE_SHARED_QUERIES" : false,
        "DEFAULT_VIS_GRAPH_SCHEMA" : true
      },
      "dateCreated" : 1708841090497
    },
    "obe" : {
      "username" : "obe",
      "password" : "{bcrypt}$2a$10$eXgDd7OYURoFXtIsvqAwqusAf2ESbOhaYmGn9v.51xkSMwa9ZYOKu",
      "grantedAuthorities" : [ "WRITE_REPO_obe", "READ_REPO_obe", "ROLE_USER" ],
      "appSettings" : {
        "DEFAULT_SAMEAS" : true,
        "DEFAULT_INFERENCE" : true,
        "EXECUTE_COUNT" : true,
        "IGNORE_SHARED_QUERIES" : false,
        "DEFAULT_VIS_GRAPH_SCHEMA" : true
      },
      "dateCreated" : 1715514946597
    }
  },
  "user_queries" : {
    "admin" : {
      "SPARQL Select template" : {
        "name" : "SPARQL Select template",
        "body" : "SELECT ?s ?p ?o\nWHERE {\n\t?s ?p ?o .\n} LIMIT 100",
        "shared" : false
      },
      "Clear graph" : {
        "name" : "Clear graph",
        "body" : "CLEAR GRAPH <http://example>",
        "shared" : false
      },
      "Add statements" : {
        "name" : "Add statements",
        "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nINSERT DATA\n      {\n      GRAPH <http://example> {\n          <http://example/book1> dc:title \"A new book\" ;\n                                 dc:creator \"A.N.Other\" .\n          }\n      }",
        "shared" : false
      },
      "Remove statements" : {
        "name" : "Remove statements",
        "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nDELETE DATA\n{\nGRAPH <http://example> {\n    <http://example/book1> dc:title \"A new book\" ;\n                           dc:creator \"A.N.Other\" .\n    }\n}",
        "shared" : false
      }
    },
    "markus.leonard" : {
      "SPARQL Select template" : {
        "name" : "SPARQL Select template",
        "body" : "SELECT ?s ?p ?o\nWHERE {\n\t?s ?p ?o .\n} LIMIT 100",
        "shared" : false
      },
      "Clear graph" : {
        "name" : "Clear graph",
        "body" : "CLEAR GRAPH <http://example>",
        "shared" : false
      },
      "Add statements" : {
        "name" : "Add statements",
        "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nINSERT DATA\n      {\n      GRAPH <http://example> {\n          <http://example/book1> dc:title \"A new book\" ;\n                                 dc:creator \"A.N.Other\" .\n          }\n      }",
        "shared" : false
      },
      "Remove statements" : {
        "name" : "Remove statements",
        "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nDELETE DATA\n{\nGRAPH <http://example> {\n    <http://example/book1> dc:title \"A new book\" ;\n                           dc:creator \"A.N.Other\" .\n    }\n}",
        "shared" : false
      }
    },
    "obe" : {
      "KKNI setiap Capaian Pembelajaran Lulusan" : {
        "name" : "KKNI setiap Capaian Pembelajaran Lulusan",
        "body" : "PREFIX OBE: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n\nSELECT ?Kode_Capaian_Pembelajaran_Lulusan ?Pengetahuan ?Kemampuan_Kerja ?Wewenang_dan_Tanggung_Jawab WHERE { \n    ?s rdf:type OBE:ProgramLearningOutcome .\n    ?s OBE:code ?Kode_Capaian_Pembelajaran_Lulusan .\n    OPTIONAL { ?s OBE:nqfKnowledge ?Pengetahuan }\n    OPTIONAL { ?s OBE:nqfWorkingSkill ?Kemampuan_Kerja }\n    OPTIONAL { ?s OBE:nqfAuthorityResposibility ?Wewenang_dan_Tanggung_Jawab }\n}",
        "shared" : false
      },
      "SNDIKTI Setiap Capaian Pembelajaran Lulusan" : {
        "name" : "SNDIKTI Setiap Capaian Pembelajaran Lulusan",
        "body" : "PREFIX OBE: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n\nSELECT ?kode ?Sikap ?Pengetahuan ?Keterampilan_Umum ?Keterampilan_Khusus WHERE { \n    ?s rdf:type OBE:ProgramLearningOutcome .\n    ?s OBE:code ?kode .\n    OPTIONAL { ?s OBE:nsAttitude ?Sikap }\n    OPTIONAL { ?s OBE:nsKnowledge ?Pengetahuan }\n    OPTIONAL { ?s OBE:nsGenericSkill ?Keterampilan_Umum }\n    OPTIONAL { ?s OBE:nsSpecificSkill ?Keterampilan_Khusus }\n}",
        "shared" : false
      },
      "domain milik seluruh CPL" : {
        "name" : "domain milik seluruh CPL",
        "body" : "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX OBE: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_Capaian_Pembelajaran_Lulusan (GROUP_CONCAT(STRAFTER(STR(?Domain), \"#\"); separator=\", \") AS ?Domains)\nWHERE { \n  ?programLearningOutcome rdf:type OBE:ProgramLearningOutcome .\n  ?programLearningOutcome OBE:code ?Kode_Capaian_Pembelajaran_Lulusan .\n  OPTIONAL {\n    ?programLearningOutcome OBE:hasDomain ?Domain .\n  }\n}\nGROUP BY ?Kode_Capaian_Pembelajaran_Lulusan\nLIMIT 100",
        "shared" : false
      },
      "domain milik seluruh SCPL" : {
        "name" : "domain milik seluruh SCPL",
        "body" : "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX OBE: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_Sub_Capaian_Pembelajaran_Lulusan (GROUP_CONCAT(STRAFTER(STR(?Domain), \"#\"); separator=\", \") AS ?Domains)\nWHERE { \n  ?subProgramLearningOutcome rdf:type OBE:SubProgramLearningOutcome .\n  ?subProgramLearningOutcome OBE:code ?Kode_Sub_Capaian_Pembelajaran_Lulusan .\n  OPTIONAL {\n    ?subProgramLearningOutcome OBE:hasDomain ?Domain .\n  }\n}\nGROUP BY ?Kode_Sub_Capaian_Pembelajaran_Lulusan\nLIMIT 100",
        "shared" : false
      },
      "domain milik seluruh CPMK" : {
        "name" : "domain milik seluruh CPMK",
        "body" : "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_CPMK (GROUP_CONCAT(STRAFTER(STR(?Domain), \"#\"); separator=\", \") AS ?Domains)\nWHERE { \n  ?courseLearningOutcome rdf:type obe:CourseLearningOutcome .\n  ?courseLearningOutcome obe:code ?Kode_CPMK .\n  OPTIONAL {\n    ?courseLearningOutcome obe:hasDomain ?Domain .\n  }\n}\nGROUP BY ?Kode_CPMK\nLIMIT 100",
        "shared" : false
      },
      "Relasi setiap CPL dengan CPMK" : {
        "name" : "Relasi setiap CPL dengan CPMK",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_CPL (GROUP_CONCAT(STRAFTER(STR(?cpkm), \"#\"); separator=\", \") AS ?Kode_CPMK)\nWHERE {\n  ?cpl a obe:ProgramLearningOutcome .\n  BIND(STRAFTER(STR(?cpl), \"#\") AS ?Kode_CPL)\n  OPTIONAL {\n    ?cpkm obe:cloPartOfPlo ?cpl .\n  }\n}\nGROUP BY ?Kode_CPL",
        "shared" : false
      },
      "Relasi setiap subCPL dengan CPMK" : {
        "name" : "Relasi setiap subCPL dengan CPMK",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_SCPL (GROUP_CONCAT(STRAFTER(STR(?cpkm), \"#\"); separator=\", \") AS ?Kode_CPMK)\nWHERE {\n  ?scpl a obe:SubProgramLearningOutcome .\n  BIND(STRAFTER(STR(?scpl), \"#\") AS ?Kode_SCPL)\n  OPTIONAL {\n    ?cpkm obe:cloPartOfSplo ?scpl .\n  }\n}\nGROUP BY ?Kode_SCPL",
        "shared" : false
      },
      "Relasi setiap CPMK dengan CPL/SCPL" : {
        "name" : "Relasi setiap CPMK dengan CPL/SCPL",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_CPMK (GROUP_CONCAT(STRAFTER(STR(?cpl), \"#\"); separator=\", \") AS ?CPL_terhubung)\nWHERE {\n  ?cpkm a obe:CourseLearningOutcome .\n  BIND(STRAFTER(STR(?cpkm), \"#\") AS ?Kode_CPMK)\n  OPTIONAL {\n    ?cpkm obe:cloPartOfPlo ?cpl .\n  }\n  OPTIONAL {\n    ?cpkm obe:cloPartOfSplo ?scpl .\n    BIND(?scpl AS ?cpl)\n  }\n}\nGROUP BY ?Kode_CPMK",
        "shared" : false
      },
      "komparasi domain afektif antara CPMK dengan CPL" : {
        "name" : "komparasi domain afektif antara CPMK dengan CPL",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_CPMK ?Kode_CPL ?Domain_Afektif_CPMK ?Domain_Afektif_CPL\nWHERE {\n  ?cpmk a obe:CourseLearningOutcome .\n  ?cpmk obe:cloPartOfPlo ?cpl .\n\n  BIND(STRAFTER(STR(?cpmk), \"#\") AS ?Kode_CPMK)\n  BIND(STRAFTER(STR(?cpl), \"#\") AS ?Kode_CPL)\n\n  OPTIONAL { ?cpmk obe:hasDomain ?Domain_Afektif_CPMK FILTER EXISTS { ?Domain_Afektif_CPMK a obe:AffectiveDomain } }\n  OPTIONAL { ?cpl obe:hasDomain ?Domain_Afektif_CPL FILTER EXISTS { ?Domain_Afektif_CPL a obe:AffectiveDomain } }\n}\nORDER BY ?Kode_CPL ?Kode_CPMK",
        "shared" : false
      },
      "komparasi domain afektif antara CPMK dengan SubCPL" : {
        "name" : "komparasi domain afektif antara CPMK dengan SubCPL",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_CPMK ?Kode_SCPL ?Domain_Afektif_CPMK ?Domain_Afektif_SCPL\nWHERE {\n  ?cpmk a obe:CourseLearningOutcome .\n  ?cpmk obe:cloPartOfSplo ?scpl .\n\n  BIND(STRAFTER(STR(?cpmk), \"#\") AS ?Kode_CPMK)\n  BIND(STRAFTER(STR(?scpl), \"#\") AS ?Kode_SCPL)\n\n  OPTIONAL { ?cpmk obe:hasDomain ?Domain_Afektif_CPMK FILTER EXISTS { ?Domain_Afektif_CPMK a obe:AffectiveDomain } }\n  OPTIONAL { ?scpl obe:hasDomain ?Domain_Afektif_SCPL FILTER EXISTS { ?Domain_Afektif_SCPL a obe:AffectiveDomain } }\n}\nORDER BY ?Kode_CPMK ?Kode_SCPL",
        "shared" : false
      },
      "komparasi domain afektif CPL dan SubCPL" : {
        "name" : "komparasi domain afektif CPL dan SubCPL",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_SCPL ?Kode_CPL ?Domain_Afektif_SCPL ?Domain_Afektif_CPL\nWHERE {\n  ?subCpl a obe:SubProgramLearningOutcome .\n  ?subCpl obe:sploPartOfPlo ?cpl .\n\n  BIND(STRAFTER(STR(?subCpl), \"#\") AS ?Kode_SCPL)\n  BIND(STRAFTER(STR(?cpl), \"#\") AS ?Kode_CPL)\n    \n  OPTIONAL { ?cpl obe:hasDomain ?Domain_Afektif_CPL FILTER EXISTS { ?Domain_Afektif_CPL a obe:AffectiveDomain } }\n  OPTIONAL { ?subCpl obe:hasDomain ?Domain_Afektif_SCPL FILTER EXISTS { ?Domain_Afektif_SCPL a obe:AffectiveDomain } }\n}\nORDER BY ?Kode_CPL ?Kode_SCPL",
        "shared" : false
      },
      "komparasi domain kognitif antara CPMK dengan CPL" : {
        "name" : "komparasi domain kognitif antara CPMK dengan CPL",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_CPMK ?Kode_CPL ?Domain_Kognitif_CPMK ?Domain_Kognitif_CPL\nWHERE {\n  ?cpmk a obe:CourseLearningOutcome .\n  ?cpmk obe:cloPartOfPlo ?cpl .\n\n  BIND(STRAFTER(STR(?cpmk), \"#\") AS ?Kode_CPMK)\n  BIND(STRAFTER(STR(?cpl), \"#\") AS ?Kode_CPL)\n\n  OPTIONAL { ?cpmk obe:hasDomain ?Domain_Kognitif_CPMK FILTER EXISTS { ?Domain_Kognitif_CPMK a obe:CognitiveDomain } }\n  OPTIONAL { ?cpl obe:hasDomain ?Domain_Kognitif_CPL FILTER EXISTS { ?Domain_Kognitif_CPL a obe:CognitiveDomain } }\n}\nORDER BY ?Kode_CPMK ?Kode_CPL",
        "shared" : false
      },
      "komparasi domain kognitif antara CPMK dengan SubCPL" : {
        "name" : "komparasi domain kognitif antara CPMK dengan SubCPL",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_CPMK ?Kode_SCPL ?Domain_Kognitif_CPMK ?Domain_Kognitif_SCPL\nWHERE {\n  ?cpmk a obe:CourseLearningOutcome .\n  ?cpmk obe:cloPartOfSplo ?scpl .\n\n  BIND(STRAFTER(STR(?cpmk), \"#\") AS ?Kode_CPMK)\n  BIND(STRAFTER(STR(?scpl), \"#\") AS ?Kode_SCPL)\n\n  OPTIONAL { ?cpmk obe:hasDomain ?Domain_Kognitif_CPMK FILTER EXISTS { ?Domain_Kognitif_CPMK a obe:CognitiveDomain } }\n  OPTIONAL { ?scpl obe:hasDomain ?Domain_Kognitif_SCPL FILTER EXISTS { ?Domain_Kognitif_SCPL a obe:CognitiveDomain } }\n}\nORDER BY ?Kode_CPMK ?Kode_SCPL",
        "shared" : false
      },
      "komparasi domain kognitif CPL dan SubCPL" : {
        "name" : "komparasi domain kognitif CPL dan SubCPL",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_SCPL ?Kode_CPL ?Domain_Kognitif_SCPL ?Domain_Kognitif_CPL\nWHERE {\n  ?scpl a obe:SubProgramLearningOutcome .\n  ?scpl obe:sploPartOfPlo ?cpl .\n\n  BIND(STRAFTER(STR(?scpl), \"#\") AS ?Kode_SCPL)\n  BIND(STRAFTER(STR(?cpl), \"#\") AS ?Kode_CPL)\n\n  OPTIONAL { ?scpl obe:hasDomain ?Domain_Kognitif_SCPL FILTER EXISTS { ?Domain_Kognitif_SCPL a obe:CognitiveDomain } }\n  OPTIONAL { ?cpl obe:hasDomain ?Domain_Kognitif_CPL FILTER EXISTS { ?Domain_Kognitif_CPL a obe:CognitiveDomain } }\n}\nORDER BY ?Kode_CPL ?Kode_SCPL",
        "shared" : false
      },
      "komparasi domain psikomotor antara CPMK dengan CPL" : {
        "name" : "komparasi domain psikomotor antara CPMK dengan CPL",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_CPMK ?Kode_CPL ?Domain_Psikomotor_CPMK ?Domain_Psikomotor_CPL\nWHERE {\n  ?cpmk a obe:CourseLearningOutcome .\n  ?cpmk obe:cloPartOfPlo ?cpl .\n\n  BIND(STRAFTER(STR(?cpmk), \"#\") AS ?Kode_CPMK)\n  BIND(STRAFTER(STR(?cpl), \"#\") AS ?Kode_CPL)\n\n  OPTIONAL { ?cpmk obe:hasDomain ?Domain_Psikomotor_CPMK FILTER EXISTS { ?Domain_Psikomotor_CPMK a obe:PsychomotorDomain } }\n  OPTIONAL { ?cpl obe:hasDomain ?Domain_Psikomotor_CPL FILTER EXISTS { ?Domain_Psikomotor_CPL a obe:PsychomotorDomain } }\n}\nORDER BY ?Kode_CPMK ?Kode_CPL",
        "shared" : false
      },
      "komparasi domain psikomotor antara CPMK dengan SubCPL" : {
        "name" : "komparasi domain psikomotor antara CPMK dengan SubCPL",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_CPMK ?Kode_SubCPL ?Domain_Psikomotor_CPMK ?Domain_Psikomotor_SubCPL\nWHERE {\n  ?cpmk a obe:CourseLearningOutcome .\n  ?cpmk obe:cloPartOfSplo ?scpl .\n\n  BIND(STRAFTER(STR(?cpmk), \"#\") AS ?Kode_CPMK)\n  BIND(STRAFTER(STR(?scpl), \"#\") AS ?Kode_SubCPL)\n\n  OPTIONAL { ?cpmk obe:hasDomain ?Domain_Psikomotor_CPMK FILTER EXISTS { ?Domain_Psikomotor_CPMK a obe:PsychomotorDomain } }\n  OPTIONAL { ?scpl obe:hasDomain ?Domain_Psikomotor_SubCPL FILTER EXISTS { ?Domain_Psikomotor_SubCPL a obe:PsychomotorDomain } }\n}\nORDER BY ?Kode_CPMK ?Kode_SubCPL",
        "shared" : false
      },
      "komparasi domain psikomotor CPL dan SubCPL" : {
        "name" : "komparasi domain psikomotor CPL dan SubCPL",
        "body" : "PREFIX obe: <http://www.semanticweb.org/ami/ontologies/2024/0/OBE#>\n\nSELECT ?Kode_SubCPL ?Kode_CPL ?Domain_Psikomotor_SubCPL ?Domain_Psikomotor_CPL\nWHERE {\n  ?subCpl a obe:SubProgramLearningOutcome .\n  ?subCpl obe:sploPartOfPlo ?cpl .\n\n  BIND(STRAFTER(STR(?subCpl), \"#\") AS ?Kode_SubCPL)\n  BIND(STRAFTER(STR(?cpl), \"#\") AS ?Kode_CPL)\n\n  OPTIONAL { ?subCpl obe:hasDomain ?Domain_Psikomotor_SubCPL FILTER EXISTS { ?Domain_Psikomotor_SubCPL a obe:PsychomotorDomain } }\n  OPTIONAL { ?cpl obe:hasDomain ?Domain_Psikomotor_CPL FILTER EXISTS { ?Domain_Psikomotor_CPL a obe:PsychomotorDomain } }\n}\nORDER BY ?Kode_CPL ?Kode_SubCPL",
        "shared" : false
      }
    }
  }
}