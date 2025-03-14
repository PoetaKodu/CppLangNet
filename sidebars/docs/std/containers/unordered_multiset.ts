import { SidebarItemConfig } from "@site/sidebars/types";
import {
  cat,
  docsClassCat,
} from "../../../common";

const sidebar: SidebarItemConfig = docsClassCat("unordered_multiset", "std/containers/sets/unordered_multiset", "", [
  "constructors",
  "destructors",
  "op:operator_assign",
  "m:get_allocator",
  cat("Iterators"),
  ["m:begin", "since-cpp11"],
  ["m:end", "since-cpp11"],
  cat("Capacity"),
  "m:empty",
  "m:size",
  "m:max_size",
  cat("Modifiers"),
  "m:clear",
  "m:insert",
  "m:emplace",
  "m:emplace_hint",
  "m:erase",
  "m:swap",
  ["m:extract", "since-cpp17"],
  ["m:merge", "since-cpp17"],
  cat("Lookup"),
  "m:count",
  "m:find",
  ["m:contains", "since-cpp20"],
  "m:equal_range",
  cat("Bucket interface"),
  "m:begin_size_type",
  "m:end_size_type",
  "m:bucket_count",
  "m:max_bucket_count",
  "m:bucket_size",
  "m:bucket",
  cat("Hash policy"),
  "m:load_factor",
  "m:max_load_factor",
  "m:rehash",
  "m:reserve",
  cat("Obervers"),
  "m:hash_function",
  "m:key_eq",
]);

export default sidebar;