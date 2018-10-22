'use strict';
module.exports = `
enum Rarity {
  Junk
  Basic
  Fine
  Masterwork
  Rare
  Exotic
  Ascended
  Legendary
}
enum Flag {
  AccountBindOnUse
  AccountBound
  Attuned
  BulkConsume
  DeleteWarning
  HideSuffix
  Infused
  MonsterOnly
  NoMysticForge
  NoSalvage
  NoSell
  NotUpgradeable
  NoUnderwater
  SoulbindOnAcquire
  SoulBindOnUse
  Tonic
  Unique
}
enum GameType {
  Activity
  Dungeon
  Pve
  Pvp
  PvpLobby
  Wvw
}
enum Restriction {
  Asura
  Charr
  Human
  Norn
  Sylvari
  Elementalist
  Engineer
  Guardian
  Mesmer
  Necromancer
  Ranger
  Thief
  Warrior
}
enum ItemType {
  Armor
  Back
  Bag
  Consumable
  CraftingMaterial
  Gathering
  Gizmo
  MiniPet
  Tool
  Trait
  Trinket
  Trophy
  UpgradeComponent
  Weapon
}
enum ArmorType {
  Boots
  Coat
  Gloves
  Helm
  HelmAquatic
  Leggings
  Shoulders
}
enum WeightClass {
  Heavy
  Medium
  Light
  Clothing
}
enum InfutionSlotType {
  Enrichment
  Infusion
}

type ItemStats {
  _blank: String
}
type Listings {
  _blank: String
}
type Prices {
  _blank: String
}
type Item {
  id: ID!
  chat_link: String!
  name: String!
  icon: String!
  description: String
  type: ItemType!
  rarity: Rarity!
  level: Int!
  vendor_value: Int!
  default_skin: Int
  flags: [Flag]!
  game_types: [GameType]!
  restrictions: [Restriction]!
}

extend type Query {
  Items (first: Int, skip: Int, ids: [ID]): [Item]
  Item (id: ID!): Item
}
`;
