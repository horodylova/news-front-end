import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import RecomendIcon from "../../public/icons/recommended-like.svg";
import { patchArticleByVote } from "../../api";

import {
  VotesContainer,
  VotesText,
  RecomendIconStyled,
} from "./VotesSection.styled";

function VotesSection({ article_id, votes }) {
  const [votesCounter, setVotesCounter] = useState(votes);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setVotesCounter(votes);
  }, [votes]);

  function handleVoteIncrease() {
    if (isDisabled) {
      toast.info('You have already voted.');
      return;
    }

    setIsDisabled(true);
    const currentVotes = votesCounter;
    setVotesCounter(currentVotes + 1);

    patchArticleByVote(article_id, 1)
      .then((data) => {
        setVotesCounter(data.article.votes);
        toast.success('Vote added successfully!');
      })
      .catch((error) => {
        toast.error(`Failed to add vote: ${error.message}`);
        setVotesCounter(currentVotes);  
        setIsDisabled(false);  
      });
  }

  return (
    <VotesContainer>
      <VotesText>Votes: {votesCounter}</VotesText>
      <RecomendIconStyled
        src={RecomendIcon}
        alt="recommend icon"
        onClick={!isDisabled ? handleVoteIncrease : null}
        disabled={isDisabled} 
      />
    </VotesContainer>
  );
}

export default VotesSection;

