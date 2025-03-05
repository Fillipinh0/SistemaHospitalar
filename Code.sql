CREATE DATABASE IF NOT EXISTS hospital;
USE hospital;

CREATE TABLE IF NOT EXISTS leito (
    id_leito INT PRIMARY KEY AUTO_INCREMENT, -- ID do leito tambem é o seu (número do leito)
    ocupado BOOLEAN NOT NULL DEFAULT FALSE -- Define se o leito está ocupado (TRUE) ou vazio (FALSE)
);

CREATE TABLE IF NOT EXISTS paciente (
    id_paciente INT PRIMARY KEY AUTO_INCREMENT,
    nome_paciente VARCHAR(100) NOT NULL,
    idade_paciente VARCHAR(3) NOT NULL, -- Agora armazenada como texto
    id_leito INT UNIQUE,
    dataAdmissao DATE NOT NULL,
    observacoes_medicas VARCHAR(200) NOT NULL,
    casos_clinicos VARCHAR(200) NOT NULL,
    FOREIGN KEY (id_leito) REFERENCES leito(id_leito) ON DELETE SET NULL
);

INSERT INTO leito (id_leito, ocupado) VALUES 
(1, FALSE),
(2, FALSE),
(3, FALSE),
(4, FALSE),
(5, FALSE),
(6, FALSE);