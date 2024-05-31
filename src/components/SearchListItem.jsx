import { ListItem } from "./SearchInput";
import { Typo } from "./Typo";

const SearchListItem = () => {
  return (
    <ListItem>
      <Typo $size="0.9rem">수민#9392</Typo>
      <Typo $size="0.8rem" $color="#6a6a6a" $margin="5px 0 0">
        fastcampus@gmail.com
      </Typo>
    </ListItem>
  );
};

export default SearchListItem;
