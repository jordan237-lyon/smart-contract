# Sample Hardhat Project

# RTFKT x Nike NFT Collection - Smart Contracts

## Introduction
Ce projet vise à développer des smart contracts pour la collection de chaussures virtuelles RTFKT x Nike. Les smart contracts sont écrits en Solidity et déployés sur la blockchain Ethereum. Ils incluent des fonctionnalités de création, de propriété, et de transfert de NFTs, ainsi que la gestion des droits d'auteur et des royalties. Des fonctionnalités supplémentaires permettent la personnalisation des NFTs et l'ajout d'expériences interactives.

## Structure du Projet
Le projet est structuré comme suit :
- `contracts/`: Contient les smart contracts en Solidity.
  - `lock.sol`: Smart contract principal pour la collection de NFTs.
- `ignition/`: Scripts de déploiement et d'interaction.
  - `lock.js`: Script pour déployer le smart contract sur Ethereum.
- `test/`: Tests unitaires pour vérifier le bon fonctionnement des smart contracts.
- `README.txt`: Fichier de documentation détaillée.
- `hardhat.config.js`: Configuration de Hardhat pour le déploiement et les tests.

## Justification du Choix de la Blockchain

Ethereum est choisi pour sa scalabilité, sécurité et compatibilité avec les normes NFTs.

## Instructions de Déploiement

### Prérequis
- Node.js
- npm ou yarn
- Hardhat
- Metamask ou un autre portefeuille Ethereum pour signer les transactions
- Compte Infura (ou une autre solution similaire) pour se connecter au réseau Ethereum

### Installation des Dépendances
1. Clonez ce dépôt :
   ```sh
   git clone https://github.com/jordan237-lyon/smart-contract.git

